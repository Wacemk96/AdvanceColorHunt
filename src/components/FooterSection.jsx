import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from 'flowbite-react';

function FooterSection() {
  return (
    <div className="text-center">
      <Footer
        container
        className="rounded-none"
      >
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <FooterBrand
              href=""
              src="/logo.png"
              alt="coolors"
              className="mr-3 h-4 sm:h-5"
            />
            <FooterLinkGroup>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterLinkGroup>
          </div>
          <FooterDivider />
          <FooterCopyright
            href="#"
            by="waseemk.com™"
            year={2024}
          />
        </div>
      </Footer>
    </div>
  );
}

export default FooterSection;
