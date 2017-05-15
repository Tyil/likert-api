#! /usr/bin/env false

use v6.c;

use TagLibC::Wrapper;

unit module TagExtractor::Albums;

sub extract-albums (
	List :$files,
	Str :$output-path
) is export {
	# open output file
	my $output = open $output-path, :w;

	# prepare the SQL file
	$output.print("INSERT INTO `Albums` (`Name`, `Artist_Name`) VALUES\n");

	my %albums;

	for $files.list -> $path {
		next if !$path.path.ends-with(".opus");

		print ".";

		try {
			my $file = TagLibC::Wrapper.new($path.path);
			my $album = $file.album();
			my $artist = $file.artist();

			if ($album.trim eq "" || $artist.trim eq "") {
				next;
			}

			$album.=subst("\"", "\\\"");
			$artist.=subst("\"", "\\\"");

			next if defined(%albums{$album});

			%albums{$album} = "(\"" ~ $album ~ "\", \"" ~ $artist ~ "\")";
		}
	}

	say (%albums.end + 1);

	$output.print(%albums.values.join(",\n"));
	$output.print(";");
	$output.close();
}
