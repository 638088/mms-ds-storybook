try{
(()=>{var _=__STORYBOOK_API__,{ActiveTabs:b,Consumer:h,ManagerContext:v,Provider:T,RequestResponseError:g,Tag:y,addons:a,combineParameters:O,controlOrMetaKey:x,controlOrMetaSymbol:k,eventMatchesShortcut:P,eventToShortcut:A,experimental_MockUniversalStore:C,experimental_UniversalStore:E,experimental_getStatusStore:R,experimental_getTestProviderStore:f,experimental_requestResponse:B,experimental_useStatusStore:M,experimental_useTestProviderStore:K,experimental_useUniversalStore:w,internal_checklistStore:H,internal_fullStatusStore:I,internal_fullTestProviderStore:N,internal_universalChecklistStore:U,internal_universalStatusStore:Y,internal_universalTestProviderStore:G,isMacLike:L,isShortcutTaken:q,keyToSymbol:D,merge:F,mockChannel:V,optionOrAltSymbol:z,shortcutMatchesShortcut:j,shortcutToAriaKeyshortcuts:J,shortcutToHumanString:Q,types:W,useAddonState:X,useArgTypes:Z,useArgs:$,useChannel:ee,useGlobalTypes:te,useGlobals:re,useParameter:ae,useSharedState:oe,useStoryPrepared:se,useStorybookApi:ne,useStorybookState:le}=__STORYBOOK_API__;var de=__STORYBOOK_THEMING_CREATE__,{create:o,themes:me}=__STORYBOOK_THEMING_CREATE__;var n=o({base:"dark",appBorderColor:"rgba(255, 255, 255, 0.25)",appBorderRadius:4});a.setConfig({theme:n,panelPosition:"bottom",initialActive:"canvas",layoutCustomisations:{showPanel(l,i){return!1}}});var s=document.createElement("style");s.textContent=`
  /* Type labels (e.g., "string") - more visible in dark mode */
  [data-testid="argstable"] span[title],
  .docblock-argstable span[title],
  td span[style*="color"] {
    color: rgba(255, 255, 255, 0.6) !important;
  }

  /* Placeholder text in textareas - match input text color */
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.5) !important;
    opacity: 1 !important;
  }

  /* Ensure canvas/preview border is visible */
  .sb-previewBlock,
  [class*="previewBlock"],
  [data-testid*="preview"] {
    border-color: rgba(255, 255, 255, 0.25) !important;
  }

  /* Hide status badges in sidebar for consistent appearance */
  [data-status-tag],
  button[aria-label*="status"],
  button[aria-label*="Change status"] {
    display: none !important;
  }

  /* Standardize sidebar folder icons - all use same blue color */
  nav[aria-label="Stories"] svg {
    color: #73ABFF !important;
  }
`;document.head.appendChild(s);})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
