import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: `Coolify01 - Diefer.es`,
	description: `Una landing page de ejemplo para Coolify01, un boilerplate de SaaS completo para Next.js. Esta página de inicio muestra las características y beneficios de Coolify01, ayudándote a lanzar tu startup SaaS en un día.`,
	openGraph: {
		type: "website",
		title: `Coolify01 - Diefer.es`,
		description: `Una landing page de ejemplo para Coolify01, un boilerplate de SaaS completo para Next.js. Esta página de inicio muestra las características y beneficios de Coolify01, ayudándote a lanzar tu startup SaaS en un día.`,
		images:
			"https://ucarecdn.com/4b0ffd0e-90b0-4a59-b63c-f5ecee0ae575/saasbold.jpg",
	},
	twitter: {
		card: "summary_large_image",
		title: `Coolify01 - Diefer.es`,
		description: `Una landing page de ejemplo para Coolify01, un boilerplate de SaaS completo para Next.js. Esta página de inicio muestra las características y beneficios de Coolify01, ayudándote a lanzar tu startup SaaS en un día.`,
		images:
			"https://ucarecdn.com/4b0ffd0e-90b0-4a59-b63c-f5ecee0ae575/saasbold.jpg",
	},
};

export default function HomePage() {
	return (
		<main>
			<Home />
		</main>
	);
}
