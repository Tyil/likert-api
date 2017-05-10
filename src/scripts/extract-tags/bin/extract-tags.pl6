#! /usr/bin/env perl6

use v6.c;

use File::Find;

use TagExtractor::Artists;
use TagExtractor::Albums;
use TagExtractor::Genres;
use TagExtractor::Songs;

# For some strange reason, it only goes right if you only run a single extractor
# at once. The ones after the first seem to fail, always.
sub MAIN
{
	my $music-dir = "/var/media/music";
	my $output-dir = "/tmp";
	my $files = find(:dir($music-dir), :type("file"), :keep-going(True)).cache;

	# Add all genres
	extract-genres(
		files => $files,
		output-path => "$output-dir/genres.sql"
	);

	# Add all artists
	extract-artists(
		files => $files,
		output-path => "$output-dir/artists.sql"
	);

	# Add all albums
	extract-albums(
		files => $files,
		output-path => "$output-dir/albums.sql"
	);

	# Add all songs
	extract-songs(
		files => $files,
		output-path => "$output-dir/songs.sql"
	);

	say "WE ARE DONE!";
}
