import sanitizeHtml from 'sanitize-html';

const defaultOptions = {
  allowedTags: ['span', 'br'],
  allowedAttributes: {
    span: ['class'],
  },
};

const sanitize = (dirty, options) => ({
  __html: sanitizeHtml(dirty, { ...defaultOptions, ...options }),
});

interface Props {
  html: any;
  options?: Record<any, any>;
}

export const SanitizedHTML = ({ html, options }: Props) => (
  <span suppressHydrationWarning dangerouslySetInnerHTML={sanitize(html, options)} />
);
