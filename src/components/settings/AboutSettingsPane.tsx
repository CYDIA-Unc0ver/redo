import { useEffect, useMemo, useState } from "react";
import type { AppInfo } from "../../lib/tauri";
import { invoke } from "../../lib/tauri";

export function AboutSettingsPane() {
	const [appInfo, setAppInfo] = useState<AppInfo | null>(null);
	const [error, setError] = useState("");

	useEffect(() => {
		let cancelled = false;
		void (async () => {
			try {
				const info = await invoke("app_info");
				if (cancelled) return;
				setAppInfo(info);
			} catch (e) {
				if (!cancelled) {
					setError(e instanceof Error ? e.message : "Failed to load app info");
				}
			}
		})();
		return () => {
			cancelled = true;
		};
	}, []);

	const versionLabel = useMemo(() => {
		if (!appInfo?.version) return "";
		return `v${appInfo.version}`;
	}, [appInfo?.version]);

	return (
		<div className="settingsPane aboutPane">
			{error ? <div className="settingsError">{error}</div> : null}

			<div className="settingsGrid">
				<section className="aboutHero" aria-labelledby="about-title">
					<img
						src={`/qwert-app-icon.png?v=${appInfo?.version ?? "dev"}`}
						alt=""
						className="aboutLogo"
						aria-hidden="true"
					/>
					<h2 id="about-title" className="aboutAppName">
						{appInfo?.name ?? "QWERT"}
						{versionLabel ? (
							<span className="aboutVersion">{versionLabel}</span>
						) : null}
					</h2>
					<p className="aboutTagline">
						Made for a certain birthday girl
					</p>
					<div className="aboutEasterEgg" style={{ marginTop: '2rem', opacity: 0.5, fontSize: '0.8rem' }}>
						To my favourite reader
					</div>
				</section>
			</div>
		</div>
	);
}
