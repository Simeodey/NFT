export default function Logo({ type }) {
  return (
    <img
      src={type === 'muted' ? '../images/logo-muted.svg' : '../images/logo.svg'}
    />
  );
}
