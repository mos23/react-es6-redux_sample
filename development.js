import path from 'path';

const src = path.resolve(__dirname,'src')
const dist = path.resolve(__dirname,'dist')

export default{
//buildの起点となるpath
    entry: src + '/index.jsx',
    
    output: {
        path: dist,
        filename: 'bundle.js'
    },
    
    module: {
//対象のファイルを変換するためのloaderを指定する
        loaders: [
            {
                //build対象を指定,正規表現が使える
                test: /\.jsx$/,
                //build対象から除外するファイルを指定する
                exclude: /node_modules/,
                //loaderは別にnpmでinstallする
                loader: 'babel',
                //loderに渡したいクエリパラメータを指定
                query: {
                    presets: ['react','es2015']
                }
            }]
    },
    
    //build対象に含めたファイルの拡張子を指定する
    resolve: {
        extensions: ['','.js']
    },
    
    plugins: []
}

