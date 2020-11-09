export default {
    initWow(app){
        if (process.browser) {
            new app.$wow({
                live: false,
                offset: 0
            }).init();
        }
    }
}