#! /usr/bin/env false

use v6.c;

use TagLibC::Wrapper;

unit module TagExtractor::Genres;

sub extract-genres (
	List :$files,
	Str :$output-path
) is export {
	# open output file
	my $output = open $output-path, :w;

	# prepare the SQL file
	$output.print("INSERT INTO `Genre` (`Name`) VALUES\n");

	my %genres;

	for $files.list -> $path {
		next if !$path.path.ends-with(".opus");

		print ".";

		try {
			my $file = TagLibC::Wrapper.new($path.path);
			my $genre = $file.genre();

			if ($genre.trim eq "") {
				next;
			}

			$genre.=subst("\"", "\\\"");

			next if defined(%genres{$genre});

			%genres{$genre} = "(\"" ~ $genre ~ "\")";
		}

		# add an unknown genre, for the songs missing one
		%genres<UNKNOWN> = "(\"UNKNOWN\")";
	}

	say (%genres.end + 1);

	$output.print(%genres.values.join(",\n"));
	$output.print(";");
	$output.close();
}
