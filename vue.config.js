module.exports = {
  lintOnSave: false,
	devServer: {
		port: 8081,
		proxy: {
			'/api': {
				target: 'https://www.wanandroid.com',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			},
			'/blogimgs': {
				target: 'https://www.wanandroid.com',
				changeOrigin: true,
				pathRewrite: {
					'^/blogimgs': ''
				}
			},
		}
	},

}