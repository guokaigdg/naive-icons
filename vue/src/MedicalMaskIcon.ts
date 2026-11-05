import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MedicalMaskIcon = defineComponent({
  name: 'MedicalMaskIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M10 20 C14 16 34 16 38 20 L38 30 C34 36 14 36 10 30 Z', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M13 25 L35 25 M13 30 L35 30', stroke: '#264653', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M10 22 L6 20 M38 22 L42 20', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default MedicalMaskIcon;
