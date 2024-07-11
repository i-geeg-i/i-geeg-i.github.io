import Header from "../Header";
import Footer from "../Footer";
import "../style.css";
import Link from "next/link";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This page shows some of my projects.",
};

export default function Portfolio() {
  return (
    <>
      <main>
        <div className="SiteElement">
          <h2>
            Here you may find some of my projects. Not all of them are here 😭
          </h2>
          <ul id="projects">
            <li>
              <Link href="https://github.com/i-geeg-i/Tic-tac-toe">
                Tic-Tac-Toe for local network - C#
              </Link>
            </li>
            <li>
              <Link href="https://github.com/i-geeg-i/c-">
                Some basic examples of operations - C#
                <img
                  src="https://github.githubassets.com/assets/arctic-code-vault-contributor-default-df8d74122a06.png"
                  id="gthbArcticCode"
                  title="Arctic Code Vault Contributor"
                />
              </Link>
            </li>
            <li><Link href="https://i-geeg-i.github.io/hr-app/">Website with quize to help HR&apos;s</Link></li>
            <li>Website for personal Chinees teacher - C# Blazor</li>
            <li>Telegram game bot &quot;Capyland&quot; - Python</li>
            <li>Pomodoro app - C#</li>
            <li>Video donwloader from YouTube with using library - C#</li>
          </ul>
        </div>
        <div className="SiteElement">
          <h2>Now in work</h2>
          <ul>
            <li>
              Project for seller on <a href="https://satu.kz">Satu.kz</a>
            </li>
            <li>UX/UI design and website for coffe shop</li>
          </ul>
        </div>
      </main>
    </>
  );
}
