import "../FooterTools.scss";

export const SocialNetworking = () => {
    const socialNetworking = [
        { key: 1, content: "f", },
        { key: 2, content: "w", },
        { key: 3, content: "f", },
        { key: 4, content: "w", },
    ];

    return (
        <div className="social-networking">
            {socialNetworking.map((item) => (
                <div className="social-networking__icon" key={item.key}>
                    <span>{item.content}</span>
                </div>
            ))}
        </div>
    )
}