
import Home from './Home.vue';
import WhoIam from './WhoIam.vue';
import HowIcanHelpYou from './HowICanHelpYou.vue';
import ReasonsToHaveBia from './ReasonsToHaveBia.vue';
import DoTest from './DoTest.vue';
import Test from './Test.vue'
import Results from './Results.vue'



export const routes = [
    { path: '', component: Home},
    { path: '/doTest', component: DoTest},
    { path: '/whoIam', component: WhoIam},
    { path: '/reasonsToHaveBia', component: ReasonsToHaveBia},
    { path: '/howIcanHelpYou', component: HowIcanHelpYou},
    { path: '/result', component: Results},
    { path: '/test/:number', component: Test}
];