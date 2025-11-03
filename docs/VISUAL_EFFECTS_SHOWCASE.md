# Visual Effects Showcase

This document showcases the visual effects available in the application with practical examples and use cases.

## Animation Gallery

### 1. Entrance Animations

#### Fade In
**Usage**: Content loading, initial page render
```tsx
<div className="animation-fade-in">
  Welcome message appears smoothly
</div>
```
**Properties**: 0.3s duration, ease-in-out

#### Scale In
**Usage**: Modals, popovers, tooltips
```tsx
<div className="animation-scale-in">
  Modal content scales from 95% to 100%
</div>
```
**Properties**: 0.25s duration, cubic-bezier easing

#### Slide Down
**Usage**: Dropdowns, notifications
```tsx
<div className="animation-slide-down">
  Dropdown menu slides from top
</div>
```
**Properties**: 0.3s duration, ease-out

#### Slide Up
**Usage**: Bottom sheets, toast notifications
```tsx
<div className="animation-slide-up">
  Toast notification slides from bottom
</div>
```
**Properties**: 0.3s duration, ease-out

### 2. Hover Effects

#### Scale Effect
**Usage**: Clickable items, buttons, icons
```tsx
<button className="hover-scale">
  Grows to 105% on hover
</button>
```
**Properties**: Scales to 1.05x, spring easing

#### Lift Effect
**Usage**: Cards, panels, interactive surfaces
```tsx
<div className="hover-lift">
  Lifts -2px with enhanced shadow
</div>
```
**Properties**: Transforms up 2px, enhanced shadow

#### Glow Effect
**Usage**: Primary actions, important elements
```tsx
<button className="glow-on-hover">
  Glows on hover
</button>
```
**Properties**: Animated box-shadow

### 3. Loading States

#### Skeleton Pulse
**Usage**: Content loading placeholders
```tsx
<div className="skeleton-pulse" style={{ width: '100%', height: '20px' }}>
  Loading...
</div>
```
**Properties**: Gradient animation, 1.5s cycle

#### Shimmer Effect
**Usage**: Image loading, data fetching
```tsx
<div className="shimmer-loading">
  Content shimmer during load
</div>
```
**Properties**: Moving gradient, 1.5s cycle

#### Rotating Spinner
**Usage**: Processing indicators
```tsx
<div className="animation-rotate">
  <SpinnerIcon />
</div>
```
**Properties**: 360° rotation, 0.75s linear

### 4. Feedback Animations

#### Shake
**Usage**: Form validation errors
```tsx
<input className="animation-shake" />
```
**Properties**: ±2px horizontal movement, 0.5s

#### Bounce
**Usage**: Confirmations, success states
```tsx
<div className="animation-bounce">
  Success checkmark
</div>
```
**Properties**: Vertical bounce, 0.6s

#### Pulse
**Usage**: Notifications, live indicators
```tsx
<div className="pulse-notification">
  Live status indicator
</div>
```
**Properties**: Scale pulse, 2s cycle

### 5. Advanced Effects

#### Glass Morphism
**Usage**: Overlays, floating panels
```tsx
<div className="glass-effect">
  Modern translucent panel
</div>
```
**Properties**: Blur + saturation + transparency

#### Gradient Border
**Usage**: Premium features, highlights
```tsx
<div className="gradient-border-animated">
  Premium feature card
</div>
```
**Properties**: Animated gradient, 3s cycle

#### Backdrop Blur
**Usage**: Modals, overlays, focus states
```tsx
<div className="backdrop-blur-md">
  Content with blurred background
</div>
```
**Properties**: 8px blur, hardware accelerated

## Component Examples

### Enhanced Button
```tsx
<button className="button-enhanced">
  <span>Click Me</span>
</button>
```
**Features**:
- Hover lift effect (-2px)
- Active state (0px)
- Ripple effect on click
- Smooth color transitions

### Interactive Card
```tsx
<div className="card-depth-1 hover-lift transition-all">
  <h3>Card Title</h3>
  <p>Card content with depth</p>
</div>
```
**Features**:
- Base elevation
- Hover lift (-2px)
- Enhanced shadows
- Border color transition

### Loading Card Skeleton
```tsx
<div className="card-depth-1">
  <div className="skeleton-pulse" style={{ height: '24px', marginBottom: '8px' }} />
  <div className="skeleton-pulse" style={{ height: '16px', marginBottom: '8px' }} />
  <div className="skeleton-pulse" style={{ height: '16px', width: '80%' }} />
</div>
```

### Enhanced Dropdown
Automatically applied to Ant Design dropdowns:
- Backdrop blur
- Slide down animation
- Enhanced shadows
- Smooth transitions

### Page Transition
Automatically applied to all routes via PageTransition component:
```tsx
<PageTransition>
  <YourPageContent />
</PageTransition>
```
**Features**:
- Fade in/out
- Subtle slide (10px)
- 200ms duration

## Utility Classes

### Transitions
```css
.transition-all        /* All properties */
.transition-colors     /* Color properties only */
.transition-transform  /* Transform only */
```

### GPU Acceleration
```css
.gpu-accelerated      /* Force GPU rendering */
.gpu-boost           /* GPU + will-change */
```

### Containment
```css
.contain-layout      /* Layout containment */
.contain-paint       /* Paint containment */
.contain-strict      /* Full containment */
```

### Elevation System
```css
.elevation-1         /* 0 1px 3px rgba(0,0,0,0.12) */
.elevation-2         /* 0 2px 6px rgba(0,0,0,0.16) */
.elevation-3         /* 0 4px 12px rgba(0,0,0,0.2) */
.elevation-4         /* 0 8px 24px rgba(0,0,0,0.24) */
```

## Best Combinations

### Premium Feature Card
```tsx
<div className="card-depth-2 hover-lift gradient-overlay-primary transition-all">
  <div className="gradient-border-animated">
    Premium Content
  </div>
</div>
```

### Loading State
```tsx
<div className="animation-fade-in">
  <div className="skeleton-pulse" style={{ height: '100px' }} />
</div>
```

### Interactive Icon Button
```tsx
<button className="hover-scale micro-bounce transition-transform">
  <Icon className="glow-on-hover" />
</button>
```

### Toast Notification
```tsx
<div className="animation-slide-up elevation-3 glass-effect">
  <p>Notification message</p>
</div>
```

### Modal with Backdrop
```tsx
<div className="modal-backdrop-enhanced animation-fade-in">
  <div className="animation-scale-in elevation-4">
    Modal content
  </div>
</div>
```

## Performance Tips

1. **Combine Effects Wisely**: Don't stack too many effects on a single element
2. **Use GPU Classes**: Add `gpu-accelerated` for frequently animated elements
3. **Limit Will-Change**: Only use on actively animating elements
4. **Test on Devices**: Always test on actual hardware, not just desktop
5. **Monitor Performance**: Use browser DevTools to check animation performance

## Browser DevTools Tips

### Chrome/Edge DevTools
1. Open Performance tab
2. Enable "Screenshots" and "Web Vitals"
3. Record interaction
4. Look for dropped frames (should maintain 60fps)

### Firefox DevTools
1. Open Performance tab
2. Enable "Screenshots"
3. Record and check for frame drops in the timeline

### Safari DevTools
1. Open Timelines tab
2. Record and check rendering performance
3. Look for paint flashing

## Accessibility Considerations

All animations respect user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Summary

The visual effects system provides:
- **70+ ready-to-use classes**
- **GPU-optimized animations**
- **Consistent timing and easing**
- **Flexible combination system**
- **Performance-first approach**

All effects are designed to work together harmoniously while maintaining optimal performance across devices.
