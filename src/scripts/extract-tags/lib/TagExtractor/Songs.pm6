#! /usr/bin/env false

use v6.c;

use TagLibC::Wrapper;

unit module TagExtractor::Songs;

sub extract-songs (
	List :$files,
	Str :$file-prefix,
	Str :$output-path,
) is export {
	# open output file
	my $output = open $output-path, :w;

	# prepare the SQL file
	$output.print("INSERT INTO `Songs` (`Name`, `Artist_Name`, `Album_Number`, `Album_Name`, `Genre_Name`, `Path`) VALUES\n");

	my %songs;

	for $files.list -> $path {
		next if !$path.path.ends-with(".opus");

		try {
			CATCH {
				when Exception {
					print ":";
				}
			}

			my $file = TagLibC::Wrapper.new($path.path);
			my $title = $file.title();
			my $album = $file.album();
			my $artist = $file.artist();
			my $genre = $file.genre();
			my $filepath = $path.path;

			if ($album.trim eq "" || $artist.trim eq "") {
				Exception.new.throw;
			}

			if ($genre eq "") {
				$genre = "UNKNOWN";
			}

			$album.=subst("\"", "\\\"");
			$artist.=subst("\"", "\\\"");
			$genre.=subst("\"", "\\\"");
			$title.=subst("\"", "\\\"");
			$filepath.=subst("\"", "\\\"");

			# remove prefix
			if ($filepath.starts-with($file-prefix)) {
				$filepath.=subst($file-prefix, "", :x(1));
			}

			# remove leading /
			if ($filepath.starts-with("/")) {
				$filepath.=subst("/", "", :x(1));
			}

			my $song = uc($album ~ "::" ~ $artist);

			print ".";

			next if defined(%songs{$song});

			%songs{$song} = "(\"" ~ $title ~ "\", \"" ~ $artist ~ "\", 1, \"" ~ $album ~ "\", \"" ~ $genre ~ "\", \"" ~ $filepath ~ "\")";
		}
	}

	say (%songs.end + 1);

	$output.print(%songs.values.join(",\n"));
	$output.print(";");
	$output.close();
}
