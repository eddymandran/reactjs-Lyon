const Contact = () => {
    return (
        <form>
            <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control" />
            </div>
            <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" id="email" className="form-control" />
            </div>
            <div>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="message" id="message" className="form-control" />
            </div>

            <div><input type="submit" value="Envoyer" className="btn btn-primary" /></div>
        </form>
    );
}

export default Contact;
