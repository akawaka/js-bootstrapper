<template>
    <header class="relative">
        <div class="bg-gray-900 pt-6">
            <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
                <div class="flex items-center flex-1">
                    <div class="flex items-center justify-between w-full md:w-auto">
                        <a href="#">
                            <span class="sr-only">Workflow</span>
                            <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="">
                        </a>

                        <div class="-mr-2 flex items-center md:hidden">
                            <button @click="showMenu = !showMenu" type="button" class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <MenuIcon class="h-6 w-6"/>
                            </button>
                        </div>
                    </div>
                    <div class="hidden space-x-8 md:flex md:ml-10">
                        <a href="#" class="text-base font-medium text-white hover:text-gray-300">About us</a>
                        <a href="#" class="text-base font-medium text-white hover:text-gray-300">Customers</a>
                        <a href="#" class="text-base font-medium text-white hover:text-gray-300">Projects</a>
                    </div>
                </div>
                <div class="hidden md:flex md:items-center md:space-x-6">
                    <a href="#" class="text-base font-medium text-white hover:text-gray-300"> Log in </a>
                    <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"> Start free trial </a>
                </div>
            </nav>
        </div>

        <div :class="{ 'opacity-0': !showMenu, 'scale-95': !showMenu, hidden: !showMenu, 'opacity-100': showMenu, 'scale-100': showMenu, shown: showMenu }"
             class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
        >
            <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                    <div>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
                    </div>
                    <div class="-mr-2">
                        <button @click="showMenu = false" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                            <span class="sr-only">Close menu</span>
                            <XIcon class="h-6 w-6"/>
                        </button>
                    </div>
                </div>
                <div class="pt-5 pb-6">
                    <div class="px-2 space-y-1">
                        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">About us</a>
                        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Customers</a>
                        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Projects</a>
                    </div>
                    <div class="mt-6 px-5">
                        <a href="#" class="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700">Start free trial</a>
                    </div>
                    <div class="mt-6 px-5">
                        <p class="text-center text-base font-medium text-gray-500">Existing customer? <a href="#" class="text-gray-900 hover:underline">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { MenuIcon, XIcon } from '@heroicons/vue/solid';

export default {
    components: {
        XIcon,
        MenuIcon,
    },

    data() {
        return {
            showMenu: false
        }
    },
}
</script>
