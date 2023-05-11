interface IpropImg
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

interface IpropNav
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  clickFn?: () => void;
}

interface IpropHeader
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

interface IpropDiv
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  data?: any;
}

interface IpropBtn
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  styles?: string;
}

interface context {
  authenticated: boolean;
}

interface rootCardObj {
  id: number;
  img: any;
  header: string;
  description: string;
}

type rootCardData = rootCardObj[];
