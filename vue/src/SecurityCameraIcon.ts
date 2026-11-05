import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SecurityCameraIcon = defineComponent({
  name: 'SecurityCameraIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '16', width: '26', height: '13', rx: '4', fill: '#264653' }));
      children.push(h('circle', { cx: '34', cy: '22.5', r: '4', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '34', cy: '22.5', r: '2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('path', { d: 'M12 16 V8 H20', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M12 29 V36 H18', 'stroke-width': sw(3) }));
      const labelled = Boolean(props.title || attrs['aria-label'] || attrs.role);
      return h(
        'svg',
        {
          viewBox: '0 0 48 48',
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          role: props.title ? 'img' : undefined,
          'aria-hidden': labelled ? undefined : true,
          ...normalizeIconProps({ ...props, ...attrs }),
        },
        children,
      );
    };
  },
});

export default SecurityCameraIcon;
