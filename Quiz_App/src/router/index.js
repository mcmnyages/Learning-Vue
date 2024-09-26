import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "@/views/QuizesView.vue";
import QuizView from "@/views/QuizView.vue";
import CardView from "@/components/Card.vue";
import Answers from "@/components/Answers.vue";
import About from "@/components/About.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "quizes",
            component: QuizesView,
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: QuizView,
        },
        {
            path: "/home",
            name: "home",
            component: CardView,
        },
        {
            path: "/answers",
            name: "answers",
            component: Answers,
        },
        {
            path: "/about",
            name: "about",
            component: About,
        },
    ],
});
export default router;