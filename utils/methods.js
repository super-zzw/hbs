export default {
    initWow(app){
        if (process.browser) {
            new app.$wow({
                live: true,
                offset: 0
            }).init();
        }
    }
}