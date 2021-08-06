declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare interface Window {
  __POWERED_BY_QIANKUN__?: boolean;
  goToCheckLoginPageGivenUnauthorizedError?: () => void;
  permissionInfo: Record<string, unknown>[];
  updateMenu: (menu: Record<string, unknown>[]) => void;
}
