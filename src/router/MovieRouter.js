export default {
    name: "Movie",
    path:"/movie",
    redirect:"/movie/nowPlaying",
    component: () => import('@/views/Movie'),
    children:[
        {
            path: 'city',
            component: () => import("@/components/City.vue")
        },
        {
            path: 'nowPlaying',
            component: () => import("@/components/NowPlaying.vue")
        },
        {
            path: 'comingSoon',
            component: () => import("@/components/ComingSoon.vue")
        },
        {
            path: "search",
            component: () => import("@/components/Search.vue")
        }
    ]
}
