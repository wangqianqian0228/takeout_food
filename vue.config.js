module.exports = {
    devServer: {
        proxy: {
            // 匹配所有以/api开头的请求路径，需要用代理的标识
            '/api': {
                //要访问的跨域的域名
                target: 'http://localhost:3000',
                ws: true,
                secure: false, // 使用的是http协议则设置为false，https协议则设置为true
                changOrigin: true, //开启代理
                //  相当于请求遇见 /api 才做代理，但真实的请求中没有/api，
                // 所以在pathRewrite中把 /api 去掉, 这样既有了标识, 又能在请求接口中把 /api 去掉。
                pathRewrite: {
                    // pathRewrite：如果不写则只能修改代理的域名，如果写则可以修改代理的域名和后边的路径。
                    '^/api': ''
                }
            }
        }
        // proxy: 'http://localhost:3000'
    }
}