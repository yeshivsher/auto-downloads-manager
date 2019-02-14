import os
import urllib3
import sys
from pprint import pprint
import eztvit
import povies

import sys, json, numpy as np

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


def download_movie(name, quality=720):
    p = povies.Povies()
    l_movies = p.search(name)
    p.download(l_movies[0]['id'])


def download_episode(series, season, episode):
    all_episodes = eztvit.EztvIt().get_episodes(series)

    try:
        season = all_episodes[season]
    except KeyError:
        print('Season not found')
        return

    try:
        episodes = season[episode]
    except KeyError:
        print('Episode not found')
        return

    episodes = sorted(episodes, key=lambda k: k['size_mb'])[-1]
    print("Downloading: {}, Size: {}".format(episodes["release"], episodes["size_mb"]))
    magnet = episodes['download']['magnet']
    os.startfile(magnet)


def download_season(series, season):
    all_episodes = eztvit.EztvIt().get_episodes(series)
    season = all_episodes[season]
    for key, value in season.iteritems():
        episode = sorted(value, key=lambda k: k['size_mb'])[-1]
        print("Downloading: {}, Size: {}".format(episode["release"], episode["size_mb"]))
        magnet = episode['download']['magnet']
        os.startfile(magnet)


def download_series(series):
    all_episodes = eztvit.EztvIt().get_episodes(series)
    for key, value in all_episodes.iteritems():
        season = all_episodes[key]
        for key, value in season.iteritems():
            episode = sorted(value, key=lambda k: k['size_mb'])[-1]
            print("Downloading: {}, Size: {}".format(episode["release"], episode["size_mb"]))
            magnet = episode['download']['magnet']
            os.startfile(magnet)


def main():
    if len(sys.argv) < 3:
        print("Usage:")
        print("    -m (movie name)")
        print("    -e (show name) (series number) (episode number)")
        return
 
    print("started!")
    print(sys.argv)
    option = sys.argv[1]

    if option == "-m":
        download_movie(sys.argv[2])
    elif option == "-e":
        download_episode(sys.argv[2].strip(), int(sys.argv[3]), int(sys.argv[4]))
    else:
        print(f"Unrecognized flag '{option}'")

print("hello world")
if __name__ == '__main__':
    main()
