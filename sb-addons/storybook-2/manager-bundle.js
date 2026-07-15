try{
(()=>{var S=__STORYBOOK_API__,{ActiveTabs:m,Consumer:_,ManagerContext:b,Provider:v,RequestResponseError:T,Tag:h,addons:a,combineParameters:g,controlOrMetaKey:O,controlOrMetaSymbol:y,eventMatchesShortcut:x,eventToShortcut:k,experimental_MockUniversalStore:C,experimental_UniversalStore:A,experimental_getStatusStore:P,experimental_getTestProviderStore:E,experimental_requestResponse:R,experimental_useStatusStore:B,experimental_useTestProviderStore:f,experimental_useUniversalStore:M,getService:K,internal_checklistStore:H,internal_fullStatusStore:I,internal_fullTestProviderStore:N,internal_universalChecklistStore:U,internal_universalStatusStore:Y,internal_universalTestProviderStore:w,isMacLike:G,isShortcutTaken:L,keyToSymbol:q,merge:D,mockChannel:F,optionOrAltSymbol:z,registerService:Q,shortcutMatchesShortcut:V,shortcutToAriaKeyshortcuts:j,shortcutToHumanString:J,types:W,useAddonState:X,useArgTypes:Z,useArgs:$,useChannel:ee,useGlobalTypes:te,useGlobals:re,useParameter:ae,useServiceCommand:oe,useServiceQuery:se,useSharedState:ne,useStoryPrepared:ie,useStorybookApi:le,useStorybookState:ue}=__STORYBOOK_API__;var me=__STORYBOOK_THEMING_CREATE__,{create:o,themes:_e}=__STORYBOOK_THEMING_CREATE__;var n=o({base:"dark",appBorderColor:"rgba(255, 255, 255, 0.25)",appBorderRadius:4});a.setConfig({theme:n});var s=document.createElement("style");s.textContent=`
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
