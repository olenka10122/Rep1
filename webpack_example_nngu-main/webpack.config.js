module.exports = {
    entry:{
        main: path.resolve(_dirname, './src/index.js'),
    },


output: {
    path: path.resolve(_dirname, './bulid'),
    filename: '[name].bundle.js',
    clean: true,
},
};