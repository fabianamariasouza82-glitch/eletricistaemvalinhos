import { useEffect } from "react";

/**
 * Aplica proteções leves contra cópia de conteúdo:
 * - Desabilita o menu de clique direito
 * - Bloqueia atalhos comuns de cópia (Ctrl/Cmd+C, Ctrl/Cmd+U, Ctrl/Cmd+S, F12, Ctrl+Shift+I)
 *
 * Importante: isso NÃO impede cópia por alguém com conhecimento técnico
 * (inspecionar elemento, desativar JS, etc.), apenas desencoraja cópia casual.
 * A seleção de texto (user-select) é desabilitada via CSS em index.css.
 */
export default function CopyProtection() {
  useEffect(() => {
    const blockContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const blockCopyShortcuts = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;

      // Bloqueia Ctrl/Cmd + C, U, S
      if (isCtrlOrCmd && ["c", "u", "s"].includes(key)) {
        e.preventDefault();
      }

      // Bloqueia F12 e Ctrl+Shift+I (abrir ferramentas de desenvolvedor)
      if (key === "f12" || (isCtrlOrCmd && e.shiftKey && key === "i")) {
        e.preventDefault();
      }
    };

    const blockCopyEvent = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockCopyShortcuts);
    document.addEventListener("copy", blockCopyEvent);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockCopyShortcuts);
      document.removeEventListener("copy", blockCopyEvent);
    };
  }, []);

  return null;
}
