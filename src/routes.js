
import Home from './Home.vue';
import WhoIam from './WhoIam.vue';
import HowIcanHelpYou from './HowICanHelpYou.vue';
import ReasonsToHaveBia from './ReasonsToHaveBia.vue';
import DoTest from './DoTest.vue';



export const routes = [
    { path: '', component: Home},
    { path: '/doTest', component: DoTest},
    { path: '/whoIam', component: WhoIam},
    { path: '/reasonsToHaveBia', component: ReasonsToHaveBia},
    { path: '/howIcanHelpYou', component: HowIcanHelpYou}
];