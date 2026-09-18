# Scorer's Table

A basketball stat book that runs entirely in your browser. Box scores you keep by
tapping, season totals, player game logs, and team-versus-opponent recaps.

**Use it:** https://knowledge32.github.io/scorers-table/

On a phone or tablet, open that link and choose **Share → Add to Home Screen**.
It then opens like an app and keeps working with no signal.

## What it does

- Add teams, rosters (jersey number and name) and opponents
- Keep a live box score by tapping a number to add one; `−1` and `Type` modes, and undo
- Send players on and off the floor with one tap, and filter the grid to just the five on court
- Time on court, using a game clock you start and stop, so dead balls cost nobody minutes
- Enter rebounds, assists, steals, blocks, turnovers, 2PT, 3PT and free throws
- Points, FGM, FGA and every percentage are worked out for you
- Season totals and averages per player, plus team and opponent recaps
- Export any table to CSV, and back everything up to a JSON file

Percentages are shown two ways: **season** (every make over every attempt) and
**per game** (the average of the single-game percentages, counting only games with
an attempt), so one 1-for-1 night doesn't outweigh a 12-attempt one.

## Your data

Everything you enter stays in your own browser on your own device. There is no
account, no server and no analytics. Nothing is uploaded, and this repository
contains no player data of any kind.

Because the data lives in the browser, it does not follow you between devices.
Use **Save / Load → Save backup file** to move a season, and keep a backup before
a tournament.

## Files

| | |
|---|---|
| `index.html` | the entire app, fonts included — no build step, no dependencies |
| `sw.js` | service worker, so it runs offline once opened |
| `manifest.webmanifest` | lets a phone install it to the home screen |

## Running it yourself

Download `index.html` and open it. That's all — it needs nothing else. Note that
iOS will not run scripts in a file opened from local storage, so on an iPhone or
iPad use the hosted link above instead.
