import type { UiAccent } from "../../lib/settings";

const ACCENT_COLOR_MAP: Record<Exclude<UiAccent, "neutral">, string> = {
	"qwert-orange": "#de7356",
	"qwert-red": "#e84d42",
	cerulean: "#0081a7",
	"tropical-teal": "#00afb9",
};

export const ACCENT_OPTIONS: Array<{
	id: UiAccent;
	label: string;
	color: string;
}> = [
	{ id: "neutral", label: "Neutral", color: "var(--text-primary)" },
	{
		id: "qwert-orange",
		label: "Orange",
		color: ACCENT_COLOR_MAP["qwert-orange"],
	},
	{
		id: "qwert-red",
		label: "QWERT Red",
		color: ACCENT_COLOR_MAP["qwert-red"],
	},
	{ id: "cerulean", label: "Cerulean", color: ACCENT_COLOR_MAP.cerulean },
	{
		id: "tropical-teal",
		label: "Tropical Teal",
		color: ACCENT_COLOR_MAP["tropical-teal"],
	},
];

export function getAccentPreviewColor(
	accent: UiAccent,
	mode: "light" | "dark",
): string {
	return (
		ACCENT_COLOR_MAP[accent as Exclude<UiAccent, "neutral">] ??
		(mode === "dark" ? "#e8e8e8" : "#37352f")
	);
}
