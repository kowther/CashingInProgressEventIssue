#!/bin/sh
curl 'http://localhost:4000/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"query GetBooks {\n  books {\n    title\n    author \n  }\n  \n  books2 {\n    title\n    author\n  }\n}\n\n"}' --compressed &

curl 'http://localhost:4000/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"query GetBooks {\n  books {\n    title\n    author \n  }\n  \n  books2 {\n    title\n    author\n  }\n}\n\n"}' --compressed 
