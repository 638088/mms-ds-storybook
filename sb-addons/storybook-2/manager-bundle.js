try{
(()=>{var m=__STORYBOOK_API__,{ActiveTabs:S,Consumer:_,ManagerContext:b,Provider:T,RequestResponseError:h,Tag:v,addons:a,combineParameters:g,controlOrMetaKey:O,controlOrMetaSymbol:x,eventMatchesShortcut:y,eventToShortcut:k,experimental_MockUniversalStore:A,experimental_UniversalStore:C,experimental_getStatusStore:P,experimental_getTestProviderStore:E,experimental_requestResponse:R,experimental_useStatusStore:B,experimental_useTestProviderStore:f,experimental_useUniversalStore:M,internal_checklistStore:K,internal_fullStatusStore:H,internal_fullTestProviderStore:I,internal_universalChecklistStore:N,internal_universalStatusStore:U,internal_universalTestProviderStore:Y,isMacLike:w,isShortcutTaken:G,keyToSymbol:L,merge:q,mockChannel:D,optionOrAltSymbol:F,shortcutMatchesShortcut:z,shortcutToAriaKeyshortcuts:V,shortcutToHumanString:j,types:J,useAddonState:Q,useArgTypes:W,useArgs:X,useChannel:Z,useGlobalTypes:$,useGlobals:ee,useParameter:te,useSharedState:re,useStoryPrepared:ae,useStorybookApi:oe,useStorybookState:se}=__STORYBOOK_API__;var ce=__STORYBOOK_THEMING_CREATE__,{create:o,themes:pe}=__STORYBOOK_THEMING_CREATE__;var n=o({base:"dark",appBorderColor:"rgba(255, 255, 255, 0.25)",appBorderRadius:4});a.setConfig({theme:n});var s=document.createElement("style");s.textContent=`
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
