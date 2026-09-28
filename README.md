# UVic Competitive Programming Club

## About us
The UVic Competitive Programming Club is a group of students who enjoy solving programming problems. We compete annually in the [International Collegiate Programming Contest (ICPC)](https://icpc.global/), and meet weekly to practice and discuss algorithms.

If you would like to compete in programming contests or just want to improve your programming skills, join us! Anyone with basic programming ability is welcome.

## Updating the resource archive

The homepage archive reads its cards from `_data/resources.yml`. Add a new
entry with the helper command:

```bash
bin/add-resource "Dijkstra's algorithm" 2026-10-06 "Shortest paths and priority queues." graphs,practice /assets/resources/dijkstra.pdf - /dijkstra
```

The last three arguments are optional `slides`, `video`, and `post` URLs. Use
`-` when one is not available. The command updates `_data/resources.yml`; the
archive card layout adapts automatically.

## Website theme

Based on [Jekyll contrast theme](https://github.com/niklasbuschmann/contrast)
