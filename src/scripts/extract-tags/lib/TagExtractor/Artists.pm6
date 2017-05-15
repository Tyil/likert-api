#! /usr/bin/env false

use v6.c;

use TagLibC::Wrapper;

unit module TagExtractor::Artists;

sub extract-artists (
	List :$files,
	Str :$output-path
) is export {
	# open output file
	my $output = open $output-path, :w;

	# prepare the SQL file
	$output.print("INSERT INTO `Artist` (`Name`) VALUES\n");

	my %artists;

	for $files.list -> $path {
		next if !$path.path.ends-with(".opus");

		print ".";

		try {
			my $file = TagLibC::Wrapper.new($path.path);
			my $artist = $file.artist();

			if ($artist.trim eq "") {
				next;
			}

			$artist.=subst("\"", "\\\"");

			next if defined(%artists{$artist});

			%artists{$artist} = "(\"" ~ $artist ~ "\")";
		}
	}

	say (%artists.end + 1);

	$output.print(%artists.values.join(",\n"));
	$output.print(";");
	$output.close();
}
