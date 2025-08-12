import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
    return (
        <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden">
            <div className="container mx-auto flex min-h-[inherit] items-center justify-center px-4 py-20">
                <div className="max-w-5xl text-center">
                    {/* EAGLE branding */}
                    <div className="mb-10 flex items-center justify-center gap-5">
                        <img
                            src="/eagle-logo.png"
                            alt="EAGLE Logo"
                            className="h-18 w-26 drop-shadow"
                        />
                        <span className="text-6xl sm:text-7xl font-extrabold tracking-tight drop-shadow-[0_0.5px_0.5px_rgba(0,0,0,0.15)]">
                            <span className="bg-gradient-to-r from-[#C0D444] to-[#A4BA35] text-transparent bg-clip-text drop-shadow-[0_0_2px_rgba(192,212,68,0.25)]">
                                EA
                            </span>
                            <span className="bg-gradient-to-r from-[#1E4A89] to-[#163C70] text-transparent bg-clip-text drop-shadow-[0_0_2px_rgba(30,74,137,0.25)]">
                                GLE
                            </span>
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.02em] leading-[1.06]">
                        <span className="block">Enterprise Architecture Knowledge Graph</span>
                        <span className="block">for Learning &amp; Exploration</span>
                    </h1>

                    {/* Subtext */}
                    <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Next-generation Enterprise Architecture Management powered by Knowledge Graphs
                        and AI, enabling smarter insights and adaptive decision-making.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex justify-center">
                        <Button asChild size="lg" className="px-6">
                            <Link to="/project" className="inline-flex items-center gap-2">
                                Explore the Project
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
