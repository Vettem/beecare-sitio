"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#caracteristicas", label: "Características" },
    { href: "#tecnologia", label: "Tecnología" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contacto" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-bee-cream/80 backdrop-blur border-b">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 h-16">
                {/* Brand */}
                <Link href="/" className="font-bold text-bee-primary text-lg">
                    BeeCare
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-6 text-sm">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="text-slate-700 hover:text-bee-primary"
                                onClick={() => setOpen(false)}
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://wa.me/<tu_numero>?text=Hola%20BeeCare%20👋"
                            className="px-3 py-2 rounded-lg bg-bee-primary text-white"
                        >
                            WhatsApp
                        </a>
                    </li>
                </ul>

                {/* Mobile toggle */}
                <button
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border text-bee-primary"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Abrir menú"
                >
                    ☰
                </button>
            </nav>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden border-t bg-bee-cream">
                    <ul className="max-w-6xl mx-auto px-4 py-3 space-y-2">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a
                                    href={l.href}
                                    className="block py-2 text-slate-700"
                                    onClick={() => setOpen(false)}
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="https://wa.me/56930687262?text=Hola%20BeeCare%20%F0%9F%91%8B%20Quiero%20saber%20m%C3%A1s"
                                className="block px-3 py-2 rounded-lg bg-bee-primary text-white text-center"
                                onClick={() => setOpen(false)}
                            >
                                WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
