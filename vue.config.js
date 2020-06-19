module.exports = {
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'router': '@/router',
                'store': '@/store',
                'views': '@/views',
                'network': '@/network',
            }
        }
    }
}