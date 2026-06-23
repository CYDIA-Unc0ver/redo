export function parentDir(relPath: string): string {
	const idx = relPath.lastIndexOf("/");
	return idx === -1 ? "" : relPath.slice(0, idx);
}

export function basename(relPath: string): string {
	const parts = relPath.split("/").filter(Boolean);
	return parts[parts.length - 1] ?? relPath;
}

export function splitEditableFileName(name: string): {
	stem: string;
	ext: string;
} {
	const trimmed = name.trim();
	const dotIndex = trimmed.lastIndexOf(".");
	if (dotIndex <= 0 || dotIndex === trimmed.length - 1) {
		return { stem: trimmed, ext: "" };
	}
	return {
		stem: trimmed.slice(0, dotIndex),
		ext: trimmed.slice(dotIndex),
	};
}

export function isMarkdownPath(relPath: string): boolean {
	const lower = relPath.toLowerCase();
	return lower.endsWith(".md") || lower.endsWith(".docx");
}

export function normalizeRelPath(path: string): string {
	return path
		.trim()
		.replace(/\u200b/g, "")
		.replace(/\\/g, "/")
		.replace(/^\/+|\/+$/g, "");
}
