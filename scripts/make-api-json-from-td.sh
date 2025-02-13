set -xe

cd $(dirname $0)
this_script_root=$(pwd)

# https://github.com/tdlib/td/
# td version 1.8.45
# layer 199
hash=8e29c4d7d21db3ab2c7a88c384626e95ef789f61

curl -L https://github.com/tdlib/td/raw/$hash/td/generate/scheme/telegram_api.tl -o $this_script_root/../scheme/telegram_api.tl

npx @psqq/tl-to-json $this_script_root/../scheme/telegram_api.tl $this_script_root/../scheme/api.json default --indent 2 --int32-ids true --skip-predicates "int,long,int128,int256,string,bytes,double,mt_message,vector,predicate"
