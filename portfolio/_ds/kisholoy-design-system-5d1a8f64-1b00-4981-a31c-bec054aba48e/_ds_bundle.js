/* @ds-bundle: {"format":4,"namespace":"KisholoyDesignSystem_5d1a8f","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"AddReview","sourcePath":"components/content/AddReview.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Comment","sourcePath":"components/content/Comment.jsx"},{"name":"Engagement","sourcePath":"components/content/Engagement.jsx"},{"name":"Pill","sourcePath":"components/content/Pill.jsx"},{"name":"ReactionCount","sourcePath":"components/content/ReactionCount.jsx"},{"name":"TopicTabs","sourcePath":"components/content/TopicTabs.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Image","sourcePath":"components/core/Image.jsx"},{"name":"LanguageToggle","sourcePath":"components/core/LanguageToggle.jsx"},{"name":"PhoneFrame","sourcePath":"components/core/PhoneFrame.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Composer","sourcePath":"components/forms/Composer.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Search","sourcePath":"components/forms/Search.jsx"},{"name":"Back","sourcePath":"components/navigation/Back.jsx"},{"name":"Head","sourcePath":"components/navigation/Head.jsx"},{"name":"Navi","sourcePath":"components/navigation/Navi.jsx"},{"name":"UnderlineTabs","sourcePath":"components/navigation/UnderlineTabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"5ca294f8a1f9","components/content/AddReview.jsx":"23aac06ca9c1","components/content/Badge.jsx":"6d10530bac6a","components/content/Comment.jsx":"e8237cc89327","components/content/Engagement.jsx":"9210a378887c","components/content/Pill.jsx":"2be725cc0188","components/content/ReactionCount.jsx":"082f9761f3a4","components/content/TopicTabs.jsx":"e4be81cb1590","components/core/Avatar.jsx":"890630e30227","components/core/Icon.jsx":"de884e6f20ce","components/core/Image.jsx":"bacc73ccbae6","components/core/LanguageToggle.jsx":"900cc7b8a4e3","components/core/PhoneFrame.jsx":"6b519451483f","components/forms/Button.jsx":"072f97e6ecdb","components/forms/Composer.jsx":"75324c063205","components/forms/Input.jsx":"ea396583417a","components/forms/Search.jsx":"754c4b7a8036","components/navigation/Back.jsx":"cf7cb8104123","components/navigation/Head.jsx":"079ad725b9cd","components/navigation/Navi.jsx":"10aba441ac44","components/navigation/UnderlineTabs.jsx":"bc5cae1b93ad"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KisholoyDesignSystem_5d1a8f = window.KisholoyDesignSystem_5d1a8f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
/**
 * Logo — the Kisholoy brand mark, as corrected/supplied directly (do not
 * redraw, recolor, or decompose these files — always render the provided
 * artwork whole).
 * - "lockup" = the full logo file (leaf + wordmark combined) — general use.
 * - "mark" = the standalone icon file (a distinct growth/sprout
 *   illustration, not a crop of the lockup) — tightest spaces, app icon.
 *
 * Size floor is 32px, stepping by 8px only: 32, 40, 48, 56... Aspect
 * ratio is always preserved (width auto-scales with height).
 */
function Logo({
  variant = "lockup",
  size = 56,
  style = {}
}) {
  const src = variant === "mark" ? "../../assets/icon-mark.svg" : "../../assets/logo-lockup.svg";
  const alt = variant === "mark" ? "Kisholoy" : "Kisholoy";
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      height: size,
      width: "auto",
      display: "block",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/Pill.jsx
try { (() => {
const COLORS = {
  green: "var(--brand-active)",
  amber: "var(--brand-primary)"
};

/**
 * Pill — the one small-chip style in Kisholoy: 24px height, 999px (pill)
 * radius, 12px regular text. Exactly 4 variants — green/amber ×
 * fill/outline — plus active/inactive states. Used for topic filters,
 * status chips, and any small tag/label chrome.
 */
function Pill({
  children,
  color = "amber",
  variant = "fill",
  active = true,
  onClick,
  style = {}
}) {
  const c = COLORS[color] ?? COLORS.amber;
  const isFill = variant === "fill";
  const bg = isFill ? c : "transparent";
  const fg = isFill ? "var(--white)" : c;
  const border = isFill ? "none" : `1px solid ${c}`;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 24,
      padding: "0 12px",
      borderRadius: 999,
      background: bg,
      color: fg,
      border,
      fontFamily: "var(--font-ui)",
      fontWeight: 400,
      fontSize: 12,
      cursor: onClick ? "pointer" : "default",
      opacity: active ? 1 : 0.5,
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Pill.jsx", error: String((e && e.message) || e) }); }

// components/content/TopicTabs.jsx
try { (() => {
/**
 * TopicTabs — the horizontal capsule topic filter (Forum/Support screens):
 * first/active item is a solid mocha capsule, the rest are plain taupe text.
 */
function TopicTabs({
  topics,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      overflowX: "auto"
    }
  }, topics.map(topic => {
    const isActive = topic === active;
    return /*#__PURE__*/React.createElement("button", {
      key: topic,
      onClick: () => onChange?.(topic),
      style: {
        flexShrink: 0,
        height: 24,
        padding: isActive ? "0 16px" : 0,
        borderRadius: 12,
        background: isActive ? "var(--brand-primary)" : "transparent",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-ui)",
        fontSize: 14,
        color: isActive ? "var(--kh-white)" : "var(--brand-secondary)"
      }
    }, topic);
  }));
}
Object.assign(__ds_scope, { TopicTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TopicTabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
const INITIAL_BG = ["var(--brand-primary)", "var(--brand-active)", "var(--brand-secondary)", "var(--brand-alert)"];
function colorForName(name) {
  if (!name) return "var(--kh-ink-400)";
  const code = name.trim().charCodeAt(0) || 0;
  return INITIAL_BG[code % INITIAL_BG.length];
}

/**
 * Avatar — plain circular photo (or initials fallback). Not a branding
 * element — a general identity/data-display primitive used anywhere a
 * person or organization is represented. No ring — it carried no
 * meaning, so it was removed; keep this simple. When avatars are shown
 * as a stacked group, don't use a ring/line as a divider — the varied
 * initials-fallback colors already separate them visually.
 *
 * If no `src` is given (or it fails to load), Avatar NEVER falls back to
 * a random/stock picture — it shows the first letter of `name` on a
 * flat (randomized-per-name) color instead.
 *
 * Size floor is 24px, stepping by 8px only: 24, 32, 40, 48, 56...
 */
function Avatar({
  src,
  name,
  alt = "",
  size = 40,
  unread = false,
  style = {}
}) {
  const [imgFailed, setImgFailed] = React.useState(false);
  const showImage = src && !imgFailed;
  const initial = (name || "").trim().charAt(0).toUpperCase();
  const px = Number(size) || 40;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: px,
      height: px,
      borderRadius: "50%",
      background: showImage ? "var(--kh-line-200)" : colorForName(name),
      flexShrink: 0,
      display: showImage ? "block" : "grid",
      placeItems: "center",
      ...style
    }
  }, showImage ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setImgFailed(true),
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover"
    }
  }) : initial && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: Math.round(px * 0.4),
      color: "var(--kh-white)"
    }
  }, initial), unread && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -2,
      right: -2,
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--brand-alert)",
      boxShadow: "0 0 0 2px var(--kh-white)"
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — the ONE icon source for Kisholoy: Google Material Symbols
 * (Outlined). This is the single, exclusive icon system — never mix in
 * another icon font, hand-drawn SVGs, emoji, or unicode glyphs.
 *
 * Rules (foundational, do not violate):
 * - Outlined (FILL 0) is the primary style. Bold/filled (FILL 1, or a
 *   heavier `weight`) is used sparingly for emphasis (e.g. an active/
 *   filled state) — pass `fill` and/or a higher `weight`.
 * - Size floor is 16px, stepping by 4px only: 16, 20, 24, 28, 32... —
 *   never below 16, never an off-step value.
 * - Never wrap an icon in an extra circle/rectangle background as pure
 *   decoration — including inside buttons. A round button (e.g. a FAB)
 *   may itself be circular, but that circle IS the button, not added
 *   framing around an otherwise plain icon.
 */
function Icon({
  name,
  size = 24,
  color = "currentColor",
  fill = false,
  weight = 400,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "material-symbols-outlined",
    style: {
      fontSize: size,
      color,
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
      ...style
    }
  }, rest), name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/AddReview.jsx
try { (() => {
/**
 * AddReview — the review-prompt card (Figma symbol "add review", node
 * 1024:593) shown at the bottom of expert/organization profiles.
 */
function AddReview({
  text = "এই প্রতিষ্ঠান বা সংশ্লিষ্ট ব্যক্তি থেকে প্রাপ্ত কোনো সেবা সম্পর্কে আমার মতামত থাকলে তা প্রকাশ করুন।"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      width: "100%",
      minHeight: 150,
      background: "var(--kh-line-200)",
      padding: "24px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "reviews",
    size: 32,
    color: "var(--text-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 16,
      lineHeight: "20px",
      color: "var(--text-primary)"
    }
  }, text));
}
Object.assign(__ds_scope, { AddReview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/AddReview.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
const COLORS = {
  green: "var(--brand-active)",
  amber: "var(--brand-primary)"
};

/**
 * Badge — the star-rating chip on expert/organization cards. Follows the
 * same rules as Pill (999px radius, 12px regular text, amber/green ×
 * fill/outline, active/inactive) — the only difference is height: 32px.
 */
function Badge({
  rating,
  color = "amber",
  variant = "fill",
  active = true
}) {
  const c = COLORS[color] ?? COLORS.amber;
  const isFill = variant === "fill";
  const bg = isFill ? c : "transparent";
  const fg = isFill ? "var(--white)" : c;
  const border = isFill ? "none" : `1px solid ${c}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 32,
      padding: "0 12px",
      borderRadius: 999,
      background: bg,
      border,
      opacity: active ? 1 : 0.5
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "kid_star",
    size: 16,
    fill: true,
    color: fg
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 400,
      fontSize: 12,
      color: fg,
      whiteSpace: "nowrap"
    }
  }, rating));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/ReactionCount.jsx
try { (() => {
/**
 * ReactionCount — an icon + count pair (e.g. the "favorite" like count
 * under a post). Two orientations: icon-first or count-first. Icon is
 * always 16px, text always 12px regular. The icon has active/inactive
 * states (e.g. filled heart when reacted, outline when not).
 */
function ReactionCount({
  icon = "favorite",
  count,
  orientation = "icon-first",
  active = false,
  color = "var(--brand-alert)"
}) {
  const iconEl = /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    fill: active,
    color: active ? color : "var(--text-secondary)"
  });
  const countEl = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 400,
      fontSize: 12,
      color: "var(--text-primary)"
    }
  }, count);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, orientation === "icon-first" ? /*#__PURE__*/React.createElement(React.Fragment, null, iconEl, countEl) : /*#__PURE__*/React.createElement(React.Fragment, null, countEl, iconEl));
}
Object.assign(__ds_scope, { ReactionCount });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ReactionCount.jsx", error: String((e && e.message) || e) }); }

// components/content/Engagement.jsx
try { (() => {
const DEFAULT_NAMES = ["আদনান", "কলকাকলি", "তাহমিদ"];

/**
 * Engagement — the like/comment summary row under posts (Figma symbol
 * "engagement", node 856:140): a stack of commenter avatars + comment
 * count on the left, a reaction count on the right. Commenters have
 * no photo on file, so the stack always shows initials, never a random
 * picture — cap the visible stack at 6, 8px overlap.
 */
function Engagement({
  commenterNames = DEFAULT_NAMES,
  commentLabel = "৩০+ মন্তব্য",
  likeCount = "১২,৯৮৭"
}) {
  const shown = commenterNames.slice(0, 6);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      fontFamily: "var(--font-ui)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, shown.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -8,
      zIndex: shown.length - i
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: n,
    size: 24
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      fontSize: 12,
      color: "var(--text-primary)"
    }
  }, commentLabel)), /*#__PURE__*/React.createElement(__ds_scope.ReactionCount, {
    icon: "favorite",
    count: likeCount,
    orientation: "icon-first",
    active: true
  }));
}
Object.assign(__ds_scope, { Engagement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Engagement.jsx", error: String((e && e.message) || e) }); }

// components/core/Image.jsx
try { (() => {
/**
 * Image — the non-profile photo slot: cover / post / discussion images.
 * Always rendered at 100% width and locked to its kind's aspect ratio,
 * cropped via object-fit: cover. Profile photos (kid, personal, expert,
 * organization) are NOT this component — those use Avatar (1:1 crop,
 * displayed circular).
 *
 * - `kind="cover"` (2:1) — a system-suggested abstract backdrop for any
 *   profile, randomly assigned from a set of 2 on-brand abstract images;
 *   the user can later replace it with their own upload.
 * - `kind="post"` (1:1) — cropped at upload time, attached to a forum/
 *   feed post.
 * - `kind="discussion"` (16:9) — cropped at upload time, attached when
 *   starting a discussion.
 *
 * No `src` (or a failed load) degrades to the cover's abstract backdrop
 * (kind="cover") or a flat placeholder color block (post/discussion) —
 * never a stock/generic photo (see the PHOTOGRAPHY policy).
 */
const ASSET_BASE = (() => {
  try {
    const el = Array.prototype.find.call(document.getElementsByTagName("script"), s => /_ds_bundle\.js/.test(s.src));
    return el ? el.src.replace(/_ds_bundle\.js.*$/, "") : "";
  } catch (e) {
    return "";
  }
})();
const COVER_BACKDROPS = [ASSET_BASE + "assets/covers/abstract-1.png", ASSET_BASE + "assets/covers/abstract-2.png"];
function Image({
  kind = "cover",
  src,
  alt = "",
  width = "100%",
  style = {}
}) {
  const [failed, setFailed] = React.useState(false);
  const [backdrop] = React.useState(() => COVER_BACKDROPS[Math.floor(Math.random() * COVER_BACKDROPS.length)]);
  const showImage = src && !failed;
  const isCover = kind === "cover";
  const showBackdrop = isCover && !showImage;
  const ratio = kind === "post" ? "var(--aspect-post)" : kind === "discussion" ? "var(--aspect-discussion)" : "var(--aspect-cover)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      aspectRatio: ratio,
      overflow: "hidden",
      background: showBackdrop ? undefined : "var(--kh-line-200)",
      flexShrink: 0,
      ...style
    }
  }, showImage && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setFailed(true),
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }), showBackdrop && /*#__PURE__*/React.createElement("img", {
    src: backdrop,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }));
}
Object.assign(__ds_scope, { Image });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Image.jsx", error: String((e && e.message) || e) }); }

// components/core/LanguageToggle.jsx
try { (() => {
/**
 * LanguageToggle — the বাং/En pill switch (Figma "language" group, seen on
 * Splash/Login/Drawer). Fixed 40px height; the active language shows as a
 * filled circle in brand-primary, the inactive language is plain text.
 */
function LanguageToggle({
  active = "bn",
  onChange
}) {
  const isBn = active === "bn";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      height: 40,
      width: 80,
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px var(--brand-secondary)",
      background: "var(--white)",
      padding: 4,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange?.("bn"),
    style: {
      flex: 1,
      height: 32,
      borderRadius: 999,
      border: "none",
      cursor: "pointer",
      background: isBn ? "var(--brand-primary)" : "transparent",
      color: isBn ? "var(--white)" : "var(--brand-primary)",
      fontFamily: "var(--font-ui-bn)",
      fontWeight: 700,
      fontSize: 12
    }
  }, "\u09AC\u09BE\u0982"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange?.("en"),
    style: {
      flex: 1,
      height: 32,
      borderRadius: 999,
      border: "none",
      cursor: "pointer",
      background: !isBn ? "var(--brand-primary)" : "transparent",
      color: !isBn ? "var(--white)" : "var(--brand-primary)",
      fontFamily: "var(--font-ui-en)",
      fontWeight: 700,
      fontSize: 12
    }
  }, "En"));
}
Object.assign(__ds_scope, { LanguageToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LanguageToggle.jsx", error: String((e && e.message) || e) }); }

// components/core/PhoneFrame.jsx
try { (() => {
const FRAME_SRC = "../../assets/phone-frame.png";
const FRAME_ASPECT = 570 / 1148; // native artwork width / height

// Measured from the source artwork: the transparent screen cutout sits at
// these insets (as % of the frame's own width/height) — symmetric on both
// axes. The dynamic island is part of the frame image itself (opaque),
// so it always renders correctly on top of whatever fills the screen.
const SCREEN_INSET = {
  top: "2.44%",
  bottom: "2.44%",
  left: "5.79%",
  right: "5.79%"
};

/**
 * PhoneFrame — a device bezel for demoing an app screen (e.g. the
 * Kisholoy Mobile App template) inside marketing pages, docs, or specs.
 * It is a display frame, not a functional/interactive primitive.
 *
 * Fill the screen with either `src` (a static screenshot image) or
 * `children` (live markup — an iframe, a Design Component import, plain
 * JSX) — `src` takes priority if both are given. Content is clipped to
 * the screen's rounded corners and sits fully behind the frame artwork,
 * so the frame's dynamic island always draws correctly on top.
 *
 * Width floor is 200px; height always follows the frame's native
 * aspect ratio (570:1148) — never set height directly or the frame will
 * distort.
 */
function PhoneFrame({
  width = 300,
  src,
  alt = "",
  children,
  screenBackground = "var(--white)",
  style = {}
}) {
  const height = Math.round(width / FRAME_ASPECT);
  const screenRadius = Math.round(width * 0.13);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width,
      height,
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: SCREEN_INSET.top,
      bottom: SCREEN_INSET.bottom,
      left: SCREEN_INSET.left,
      right: SCREEN_INSET.right,
      borderRadius: screenRadius,
      overflow: "hidden",
      background: screenBackground
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : children), /*#__PURE__*/React.createElement("img", {
    src: FRAME_SRC,
    alt: "",
    "aria-hidden": "true",
    draggable: false,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      display: "block"
    }
  }));
}
Object.assign(__ds_scope, { PhoneFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PhoneFrame.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const COLORS = {
  green: {
    fg: "var(--brand-active)"
  },
  amber: {
    fg: "var(--brand-primary)"
  }
};

/**
 * Button — the pill CTA. Exactly 4 variants: green/amber × fill/outline.
 * Fixed 40px height, 999px (pill) radius, 16px text, 16px icon. "active"
 * controls the pressed/selected look for toggle-style buttons (e.g.
 * follow); "disabled" is the inactive/non-interactive state.
 */
function Button({
  children,
  color = "amber",
  variant = "fill",
  icon,
  iconPosition = "trailing",
  active = true,
  fullWidth = false,
  disabled = false,
  onClick,
  style = {}
}) {
  const c = COLORS[color] ?? COLORS.amber;
  const isFill = variant === "fill";
  const bg = isFill ? c.fg : "transparent";
  const fg = isFill ? "var(--white)" : c.fg;
  const border = isFill ? "none" : `1px solid ${c.fg}`;
  const iconOnly = !children && !!icon;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: children ? "space-between" : "center",
      gap: 8,
      width: iconOnly ? 40 : fullWidth ? "100%" : "auto",
      height: 40,
      padding: iconOnly ? 0 : "0 16px",
      flexShrink: 0,
      borderRadius: 999,
      background: bg,
      color: fg,
      border,
      fontFamily: "var(--font-ui)",
      fontWeight: 400,
      fontSize: 16,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled || !active ? 0.5 : 1,
      transition: "filter 120ms ease, transform 80ms ease",
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.97)",
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, icon && iconPosition === "leading" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconOnly ? 20 : 16,
    color: fg
  }), children && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: children && icon ? 1 : "initial"
    }
  }, children), icon && iconPosition === "trailing" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconOnly ? 20 : 16,
    color: fg
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Composer.jsx
try { (() => {
const {
  useRef,
  useLayoutEffect,
  useState
} = React;
const SINGLE_LINE_HEIGHT = 40;
const LINE_HEIGHT = 20;

/**
 * Composer — growing multi-line text field. 40px tall, 999px (full pill)
 * radius in its normal single-line state; once text wraps past one line
 * it keeps expanding UPWARD (softening to a 20px rounded-rect radius)
 * while the round action button stays pinned to the bottom-right corner.
 * The action button is 32px with a 16px glyph, inset 4px from the
 * field's own edge — never a separate button living outside the field.
 * Shared between Tam chat (inline send) and the Comment composer (no
 * action — paired with an external Publish button instead).
 *
 * Active/inactive color states: with no text (or `active={false}`) the
 * action button reads muted/disabled (line-200 fill, secondary-text
 * glyph); once there's text to send (or `active={true}`) it switches to
 * the brand-active fill with a white glyph, and the field's own border
 * steps up to the emphasis (ink-400) tone.
 */
function Composer({
  value,
  placeholder,
  onChange,
  icon = "arrow_upward",
  onAction,
  width = "100%",
  maxLines = 5,
  active
}) {
  const ref = useRef(null);
  const [multiline, setMultiline] = useState(false);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    const natural = el.scrollHeight;
    setMultiline(natural > LINE_HEIGHT + 12);
    el.style.height = Math.min(natural, LINE_HEIGHT * maxLines) + "px";
  }, [value, maxLines]);
  const isActive = active !== undefined ? active : !!(value && String(value).trim().length);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width,
      minHeight: SINGLE_LINE_HEIGHT,
      borderRadius: multiline ? 20 : 999,
      background: "var(--kh-white)",
      boxShadow: `inset 0 0 0 1px ${isActive ? "var(--kh-ink-400)" : "var(--border-default)"}`,
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      transition: "border-radius 120ms ease"
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    ref: ref,
    rows: 1,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      flex: 1,
      minHeight: LINE_HEIGHT,
      maxHeight: LINE_HEIGHT * maxLines,
      margin: "10px 0",
      marginLeft: 16,
      marginRight: onAction ? 44 : 16,
      padding: 0,
      border: "none",
      outline: "none",
      resize: "none",
      overflowY: "auto",
      background: "transparent",
      fontFamily: "var(--font-ugc)",
      fontSize: 14,
      lineHeight: LINE_HEIGHT + "px",
      color: "var(--text-primary)"
    }
  }), onAction && /*#__PURE__*/React.createElement("div", {
    onClick: onAction,
    style: {
      position: "absolute",
      right: 4,
      bottom: 4,
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: isActive ? "var(--brand-active)" : "var(--kh-line-200)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      flexShrink: 0,
      transition: "background 120ms ease"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    color: isActive ? "var(--kh-white)" : "var(--text-secondary)"
  })));
}
Object.assign(__ds_scope, { Composer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Composer.jsx", error: String((e && e.message) || e) }); }

// components/content/Comment.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Comment — the comment sheet (Figma symbol "comment", node 874:204):
 * a composer up top (emoji-mood icon, growing pill input, disclaimer,
 * publish button) followed by the comment thread, each row with avatar,
 * name, timestamp and a moderation kebab menu.
 */
function Comment({
  items = [],
  onSubmit,
  onDeleteItem
}) {
  const [draft, setDraft] = useState("");
  const [openMenu, setOpenMenu] = useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      background: "rgba(250,233,212,0.9)",
      padding: "32px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 24
    },
    onClick: () => setOpenMenu(null)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 300,
      fontSize: 12,
      lineHeight: "15px",
      color: "var(--text-secondary)"
    }
  }, "\u09AF\u09C7\u0995\u09CB\u09A8\u09CB \u09AE\u09A4\u09BE\u09AE\u09A4 \u09AA\u09CD\u09B0\u09A6\u09BE\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09AA\u09BE\u09B0\u09B8\u09CD\u09AA\u09B0\u09BF\u0995 \u09B8\u09AE\u09CD\u09AE\u09BE\u09A8 \u0993 \u09AA\u09CD\u09B0\u09B6\u0982\u09B8\u09A8\u09C0\u09AF\u09BC \u0986\u099A\u09B0\u09A3 \u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B6\u09BF\u09A4\u0964 \u09AA\u09CD\u09B0\u09AF\u09BC\u09CB\u099C\u09A8\u09C7 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u09C7\u09B0 \u09A8\u09C0\u09A4\u09BF\u09AE\u09BE\u09B2\u09BE \u09A6\u09C7\u0996\u09C1\u09A8\u0964"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "flex-end",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sentiment_very_satisfied",
    size: 28,
    color: "var(--brand-secondary)",
    style: {
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Composer, {
    placeholder: "\u09AE\u09A8\u09CD\u09A4\u09AC\u09CD\u09AF \u09B2\u09BF\u0996\u09C1\u09A8",
    value: draft,
    onChange: e => setDraft(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    color: "green",
    variant: "fill",
    icon: "arrow_forward",
    onClick: () => {
      if (!draft.trim()) return;
      onSubmit && onSubmit(draft);
      setDraft("");
    }
  }, "\u09AA\u09CD\u09B0\u0995\u09BE\u09B6"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, items.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: c.avatar,
    name: c.name,
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 16,
      color: "var(--text-primary)"
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      cursor: "pointer",
      display: "flex"
    },
    onClick: e => {
      e.stopPropagation();
      setOpenMenu(openMenu === i ? null : i);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "more_vert",
    size: 16,
    color: "var(--text-primary)"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 10,
      color: "var(--text-secondary)"
    }
  }, c.timestamp), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-ugc)",
      fontSize: 14,
      color: "var(--text-primary)",
      margin: "8px 0 0"
    }
  }, c.text), openMenu === i && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 0,
      top: 20,
      zIndex: 1,
      background: "var(--kh-white)",
      borderRadius: 5,
      boxShadow: "0px 2px 2px rgb(217,217,217)",
      padding: "12px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      minWidth: 160
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: "var(--text-primary)"
    }
  }, "\u09AC\u09BF\u09B7\u09AF\u09BC\u099F\u09BF \u098F\u0996\u09BE\u09A8\u09C7 \u09A5\u09BE\u0995\u09BE \u0989\u099A\u09BF\u09CE \u09A8\u09AF\u09BC\u0964"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 12,
      color: "var(--brand-alert)",
      cursor: "pointer"
    },
    onClick: () => {
      onDeleteItem && onDeleteItem(i);
      setOpenMenu(null);
    }
  }, "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8")))))));
}
Object.assign(__ds_scope, { Comment });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Comment.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/**
 * Input — labeled pill text field used across Registration/onboarding forms.
 * The field itself is exactly 40px tall (999px/pill radius) — the label
 * is absolutely positioned straddling the top border line, notched by a
 * white backing rect, exactly as authored in the design (nick name /
 * full name / dob / gender /...). The label sits outside the 40px box,
 * so it never adds to the field's height.
 */
function Input({
  label,
  value,
  placeholder,
  icon,
  emphasis = false,
  width = "100%",
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width,
      height: 40,
      fontFamily: "var(--font-ui)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 999,
      background: "var(--kh-white)",
      boxShadow: `inset 0 0 0 1px ${emphasis ? "var(--kh-ink-400)" : "var(--border-default)"}`
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    style: {
      position: "absolute",
      left: 20,
      top: 0,
      width: "calc(100% - 60px)",
      height: 40,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "inherit",
      fontSize: 16,
      color: "var(--text-primary)"
    }
  }), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 8,
      top: 8,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: "var(--kh-line-200)"
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 20,
      top: -8,
      padding: "0 8px",
      background: "var(--kh-white)",
      fontFamily: "var(--font-ui)",
      fontSize: 12,
      color: "var(--text-primary)",
      whiteSpace: "nowrap"
    }
  }, label));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Search.jsx
try { (() => {
/**
 * Search — the pill search bar (Figma symbol "search", node 856:122).
 * White fill, 1px border, placeholder-gray text, trailing search glyph.
 */
function Search({
  value,
  placeholder = "যা খুঁজছেন লিখুন",
  onChange,
  width = "100%"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width,
      height: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 25,
      background: "var(--kh-white)",
      boxShadow: "inset 0 0 0 1px var(--border-default)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    style: {
      position: "absolute",
      left: 20,
      top: 0,
      width: "calc(100% - 66px)",
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-ui)",
      fontSize: 16,
      color: "var(--text-primary)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 13,
      top: 13,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 20,
    color: "var(--text-secondary)"
  })));
}
Object.assign(__ds_scope, { Search });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Search.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Back.jsx
try { (() => {
/**
 * Back — white back-navigation bar with a subtle drop shadow (Figma symbol
 * "back", node 1042:579). Used on every drilled-in detail screen. Back
 * icon, title, and the right-side options icon all sit on one centered row.
 */
function Back({
  title,
  onBack,
  onOptionsClick,
  showOptions = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: 75,
      background: "var(--surface-page)",
      boxShadow: "var(--shadow-header)",
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "0 24px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow_back",
    size: 24,
    color: "var(--text-primary)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-ui)",
      fontSize: 16,
      color: "var(--text-primary)"
    }
  }, title), showOptions && /*#__PURE__*/React.createElement("button", {
    onClick: onOptionsClick,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "more_vert",
    size: 24,
    color: "var(--text-primary)"
  })));
}
Object.assign(__ds_scope, { Back });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Back.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Head.jsx
try { (() => {
/**
 * Head — top app-bar (Figma symbol "head", node 932:524): hamburger menu,
 * a title OR the compact brand lockup, and the current user's ringed
 * avatar. No separate notification icon — unread notifications surface as
 * a small dot overlapping the avatar instead.
 */
function Head({
  mode = "title",
  title = "",
  unread = false,
  avatarSrc,
  onMenuClick,
  onAvatarClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onMenuClick,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "menu",
    size: 24,
    color: "var(--kh-ink-400)"
  })), mode === "brand" ? /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    size: 36
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--brand-active)"
    }
  }, title)), /*#__PURE__*/React.createElement("button", {
    onClick: onAvatarClick,
    style: {
      background: "none",
      border: "none",
      padding: 0,
      cursor: onAvatarClick ? "pointer" : "default",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatarSrc,
    name: title || "K",
    size: 40,
    unread: unread
  })));
}
Object.assign(__ds_scope, { Head });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Head.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navi.jsx
try { (() => {
const TABS = [{
  key: "home",
  label: "কিশলয়",
  icon: "spa"
}, {
  key: "support",
  label: "সহায়তা",
  icon: "person_raised_hand"
}, {
  key: "forum",
  label: "সমাবেশ",
  icon: "book_4"
}, {
  key: "tam",
  label: "ট্যাম",
  icon: "auto_transmission"
}];

/**
 * Navi — bottom tab bar (Figma symbol "navi", node 596:184). Cream
 * background, 4 fixed destinations. Active tab renders sage; inactive
 * tabs render the muted taupe tone.
 */
function Navi({
  active = "home",
  onChange
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      width: "100%",
      height: 80,
      background: "var(--surface-page)",
      alignItems: "flex-start",
      justifyContent: "space-around",
      paddingTop: 15
    }
  }, TABS.map(tab => {
    const isActive = tab.key === active;
    const color = isActive ? "var(--brand-active)" : "var(--brand-secondary)";
    return /*#__PURE__*/React.createElement("button", {
      key: tab.key,
      onClick: () => onChange?.(tab.key),
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        background: "none",
        border: "none",
        cursor: "pointer",
        color
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: tab.icon,
      size: 24,
      color: color
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-ui)",
        fontSize: 12,
        color
      }
    }, tab.label));
  }));
}
Object.assign(__ds_scope, { Navi });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navi.jsx", error: String((e && e.message) || e) }); }

// components/navigation/UnderlineTabs.jsx
try { (() => {
/**
 * UnderlineTabs — section tab row used on profile screens (Kid-Profile,
 * Support-Experts): plain labels, active one in sage with a 5px sage bar
 * beneath.
 */
function UnderlineTabs({
  tabs,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      paddingTop: 8
    }
  }, tabs.map(tab => {
    const isActive = tab === active;
    return /*#__PURE__*/React.createElement("button", {
      key: tab,
      onClick: () => onChange?.(tab),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        paddingBottom: 8,
        position: "relative",
        fontFamily: "var(--font-ui)",
        fontSize: 14,
        color: isActive ? "var(--brand-active)" : "var(--text-secondary)"
      }
    }, tab, isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 5,
        background: "var(--brand-active)"
      }
    }));
  })));
}
Object.assign(__ds_scope, { UnderlineTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/UnderlineTabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.AddReview = __ds_scope.AddReview;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Comment = __ds_scope.Comment;

__ds_ns.Engagement = __ds_scope.Engagement;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.ReactionCount = __ds_scope.ReactionCount;

__ds_ns.TopicTabs = __ds_scope.TopicTabs;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Image = __ds_scope.Image;

__ds_ns.LanguageToggle = __ds_scope.LanguageToggle;

__ds_ns.PhoneFrame = __ds_scope.PhoneFrame;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Composer = __ds_scope.Composer;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Search = __ds_scope.Search;

__ds_ns.Back = __ds_scope.Back;

__ds_ns.Head = __ds_scope.Head;

__ds_ns.Navi = __ds_scope.Navi;

__ds_ns.UnderlineTabs = __ds_scope.UnderlineTabs;

})();
