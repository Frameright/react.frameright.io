export function Mailchimp() {
  return (
    <div className="mailchimp">
      <h6>Stay updated and sign up for our newsletter</h6>
      <form
        action="https://frameright.us19.list-manage.com/subscribe/post?u=d9d1a282d42f0f85213ec5256&amp;id=8085d668c5&amp;f_id=002ea8e4f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <input
          type="email"
          defaultValue=""
          placeholder="YOUR EMAIL HERE"
          name="EMAIL"
          id="mce-EMAIL"
          required
        />
        <div hidden>
          <input type="hidden" name="tags" value="6417561" />
        </div>
        <div
          style={{ position: 'absolute', left: '-5000px' }}
          aria-hidden="true"
        >
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
          <input
            type="text"
            name="b_d9d1a282d42f0f85213ec5256_8085d668c5"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        <input
          type="submit"
          value="SUBSCRIBE"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
        />
      </form>
    </div>
  );
}
