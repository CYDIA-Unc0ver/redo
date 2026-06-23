use crate::paths;
use std::path::{Path, PathBuf};

pub const QWERT_DIR_NAME: &str = ".qwert";
pub const QWERT_DB_NAME: &str = "qwert.sqlite";
pub const QWERT_APP_DIR_NAME: &str = "QWERT";
pub const AI_HISTORY_DIR_NAME: &str = "ai_history";

pub fn qwert_dir(space_root: &Path) -> Result<PathBuf, String> {
    paths::join_under(space_root, Path::new(QWERT_DIR_NAME))
}

pub fn qwert_db_path(space_root: &Path) -> Result<PathBuf, String> {
    Ok(qwert_dir(space_root)?.join(QWERT_DB_NAME))
}

pub fn qwert_cache_dir(space_root: &Path) -> Result<PathBuf, String> {
    Ok(qwert_dir(space_root)?.join("cache"))
}

pub fn qwert_app_dir(space_root: &Path) -> Result<PathBuf, String> {
    let base = qwert_dir(space_root)?;
    paths::join_under(&base, Path::new(QWERT_APP_DIR_NAME))
}

pub fn ai_history_dir(space_root: &Path) -> Result<PathBuf, String> {
    let base = qwert_app_dir(space_root)?;
    paths::join_under(&base, Path::new(AI_HISTORY_DIR_NAME))
}

pub fn ensure_qwert_dir(space_root: &Path) -> Result<PathBuf, String> {
    let dir = qwert_dir(space_root)?;
    std::fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    Ok(dir)
}

pub fn ensure_qwert_cache_dir(space_root: &Path) -> Result<PathBuf, String> {
    let dir = qwert_cache_dir(space_root)?;
    std::fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    Ok(dir)
}

pub fn ensure_qwert_app_dir(space_root: &Path) -> Result<PathBuf, String> {
    let dir = qwert_app_dir(space_root)?;
    std::fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    Ok(dir)
}

pub fn ensure_ai_history_dir(space_root: &Path) -> Result<PathBuf, String> {
    let dir = ai_history_dir(space_root)?;
    std::fs::create_dir_all(&dir).map_err(|e| e.to_string())?;
    Ok(dir)
}
