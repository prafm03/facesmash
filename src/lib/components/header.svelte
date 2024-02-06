<script>
    import { page } from "$app/stores";
</script>

<header class="pb-3 pt-6 font-mono">
    <a
        class="font-bolds container mx-auto flex items-center justify-center pb-3 text-3xl text-pink-500"
        href="/"
    >
        sexy.slems.net
    </a>
    <div class="sm container mx-auto flex items-center justify-center">
        <nav>
            <ul
                class="flex list-disc flex-col md:list-none md:flex-row md:space-x-4"
            >
                <li>
                    <a
                        href="/"
                        class="hover:font-extrabold"
                        class:text-blue-500={$page.url.pathname === "/"}
                        class:font-extrabold={$page.url.pathname === "/"}
                        data-sveltekit-prefetch
                    >
                        rate.people</a
                    >
                </li>
                <li>
                    <a
                        href="/male"
                        class="hover:font-extrabold"
                        class:text-blue-500={$page.url.pathname === "/male"}
                        class:font-extrabold={$page.url.pathname === "/male"}
                    >
                        leaderboards.male</a
                    >
                </li>
                <li>
                    <a
                        href="/female"
                        class="hover:font-extrabold"
                        class:text-blue-500={$page.url.pathname === "/female"}
                        class:font-extrabold={$page.url.pathname === "/female"}
                    >
                        leaderboards.female</a
                    >
                </li>
                <!-- <li>
                    <a
                        href="/upload"
                        class="hover:font-extrabold"
                        class:text-blue-500={$page.url.pathname === "/upload"}
                        class:font-extrabold={$page.url.pathname === "/upload"}
                    >
                        upload.person</a
                    >
                </li> -->
            </ul>
        </nav>
    </div>
</header>
