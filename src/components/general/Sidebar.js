"use client";
import {
  ChevronUp,
  LineChart,
  User2,
  Users2,
  Ban,
  Settings,
  AtSign,
  BookOpen,
  UserPlus2,
  Signal,
} from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Sidebar = () => {
  return (
    <div
      style={inter.style}
      className="sticky top-0 flex min-w-[15rem] h-screen flex-col justify-between border-e bg-white"
    >
      <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          Logo
        </span>

        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2  text-gray-700  active:text-gray-700"
          >
            <LineChart className="h-5 w-5 opacity-75" stroke="currentColor" />
            <span className="text-sm font-medium"> Dashboard </span>
          </Link>

          <Link
            href="/posts"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <BookOpen className="h-5 w-5 opacity-75" stroke="currentColor" />
            <span className="text-sm font-medium"> Posts </span>
          </Link>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center gap-2">
                <Users2 className="h-5 w-5 opacity-75" stroke="currentColor" />
                <span className="text-sm font-medium"> Teams </span>
              </div>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <ChevronUp
                  className="h-5 w-5 opacity-75"
                  stroke="currentColor"
                  strokeWidth={2.5}
                />
              </span>
            </summary>

            <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
              <Link
                href="/teams/banned-users"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <Ban className="h-5 w-5 opacity-75" stroke="currentColor" />
                <span className="text-sm font-medium"> Banned Users </span>
              </Link>

              <Link
                href="/teams/members"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <UserPlus2
                  className="h-5 w-5 opacity-75"
                  stroke="currentColor"
                />
                <span className="text-sm font-medium"> All Members </span>
              </Link>
            </nav>
          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <div className="flex items-center gap-2">
                <Settings
                  className="h-5 w-5 opacity-75"
                  stroke="currentColor"
                />
                <span className="text-sm font-medium"> Setting </span>
              </div>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <ChevronUp
                  className="h-5 w-5 opacity-75"
                  stroke="currentColor"
                  strokeWidth={2.5}
                />
              </span>
            </summary>

            <nav aria-label="Teams Nav" className="mt-2 flex flex-col px-4">
              <Link
                href="/settings/smtp"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <AtSign className="h-5 w-5 opacity-75" stroke="currentColor" />
                <span className="text-sm font-medium"> SMTP </span>
              </Link>
            </nav>
          </details>
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <Link
          href="/me"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">Eric Frusciante</strong>
              <span> eric@frusciante.com </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
