
html2md -i $1 -o $1 && node postprocess.js $1 && rm $1

