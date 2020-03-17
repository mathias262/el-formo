#!/usr/local/bin/fish

set stats_file "stats.json"

set mode $argv[1]

node node_modules/webpack/bin/webpack.js --profile --json > $stats_file --config webpack/$mode.config.js;
sed -i "" "1,3d" $stats_file;
node_modules/webpack-bundle-analyzer/lib/bin/analyzer.js --default-sizes gzip $stats_file ./dist;