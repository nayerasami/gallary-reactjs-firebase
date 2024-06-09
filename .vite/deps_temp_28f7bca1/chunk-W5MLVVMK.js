import {
  ImageListContext_default
} from "./chunk-USNCK6HU.js";
import {
  init_styled,
  styled_default
} from "./chunk-24N3U66A.js";
import {
  init_integerPropType,
  integerPropType_default
} from "./chunk-F7TA6OX4.js";
import {
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx,
  init_composeClasses,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_useThemeProps,
  useThemeProps
} from "./chunk-XWIC4NZ5.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  init_extends,
  init_objectWithoutPropertiesLoose,
  require_jsx_runtime,
  require_prop_types
} from "./chunk-5KP56RSL.js";
import {
  require_react
} from "./chunk-6P5PNMGD.js";
import {
  __toESM
} from "./chunk-WXXH56N5.js";

// node_modules/@mui/material/ImageList/ImageList.js
init_objectWithoutPropertiesLoose();
init_extends();
init_composeClasses();
init_integerPropType();
init_clsx();
var import_prop_types = __toESM(require_prop_types());
var React = __toESM(require_react());
init_styled();
init_useThemeProps();

// node_modules/@mui/material/ImageList/imageListClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getImageListUtilityClass(slot) {
  return generateUtilityClass("MuiImageList", slot);
}
var imageListClasses = generateUtilityClasses("MuiImageList", ["root", "masonry", "quilted", "standard", "woven"]);
var imageListClasses_default = imageListClasses;

// node_modules/@mui/material/ImageList/ImageList.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "cols", "component", "rowHeight", "gap", "style", "variant"];
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant]
  };
  return composeClasses(slots, getImageListUtilityClass, classes);
};
var ImageListRoot = styled_default("ul", {
  name: "MuiImageList",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant]];
  }
})(({
  ownerState
}) => {
  return _extends({
    display: "grid",
    overflowY: "auto",
    listStyle: "none",
    padding: 0,
    // Add iOS momentum scrolling for iOS < 13.0
    WebkitOverflowScrolling: "touch"
  }, ownerState.variant === "masonry" && {
    display: "block"
  });
});
var ImageList = React.forwardRef(function ImageList2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiImageList"
  });
  const {
    children,
    className,
    cols = 2,
    component = "ul",
    rowHeight = "auto",
    gap = 4,
    style: styleProp,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const contextValue = React.useMemo(() => ({
    rowHeight,
    gap,
    variant
  }), [rowHeight, gap, variant]);
  React.useEffect(() => {
    if (true) {
      if (document !== void 0 && "objectFit" in document.documentElement.style === false) {
        console.error(["MUI: ImageList v5+ no longer natively supports Internet Explorer.", "Use v4 of this component instead, or polyfill CSS object-fit."].join("\n"));
      }
    }
  }, []);
  const style = variant === "masonry" ? _extends({
    columnCount: cols,
    columnGap: gap
  }, styleProp) : _extends({
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap
  }, styleProp);
  const ownerState = _extends({}, props, {
    component,
    gap,
    rowHeight,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(ImageListRoot, _extends({
    as: component,
    className: clsx_default(classes.root, classes[variant], className),
    ref,
    style,
    ownerState
  }, other, {
    children: (0, import_jsx_runtime.jsx)(ImageListContext_default.Provider, {
      value: contextValue,
      children
    })
  }));
});
true ? ImageList.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `ImageListItem`s.
   */
  children: import_prop_types.default.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * Number of columns.
   * @default 2
   */
  cols: integerPropType_default,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The gap between items in px.
   * @default 4
   */
  gap: import_prop_types.default.number,
  /**
   * The height of one row in px.
   * @default 'auto'
   */
  rowHeight: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["auto"]), import_prop_types.default.number]),
  /**
   * @ignore
   */
  style: import_prop_types.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["masonry", "quilted", "standard", "woven"]), import_prop_types.default.string])
} : void 0;
var ImageList_default = ImageList;

export {
  getImageListUtilityClass,
  imageListClasses_default,
  ImageList_default
};
//# sourceMappingURL=chunk-W5MLVVMK.js.map
