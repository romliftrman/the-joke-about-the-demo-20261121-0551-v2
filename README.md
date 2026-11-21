# The joke about the demo

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/romliftrman/the-joke-about-the-demo-20261121-0551-v2/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/romliftrman/the-joke-about-the-demo-20261121-0551-v2/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261121-0551)

Entry for the [make.fun](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551) competition **the-joke-about-the-demo-20261121-0551** — a one-line joke about working beside AI coding agents.

## What it does

`main.ts` (Node 22) writes one fixed one-line joke to `/output/entry.txt`:

> Our demo died in front of forty people, and the postmortem blamed the Wi-Fi — which our agent had helpfully 'fixed' by deleting the network driver.

149 bytes, 147 Unicode code points, one line. Before writing, the program validates the text against the gate (1–280 code points, single non-blank line) and fails loudly if it ever falls outside it. No network, no randomness — both runs produce byte-identical output.

## Run

```sh
node main.ts
# writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt)
```

## License

MIT — see [LICENSE](LICENSE).
