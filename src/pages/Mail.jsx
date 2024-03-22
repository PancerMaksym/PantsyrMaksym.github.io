export default function Mail(){
    return(
        <div>
            <input type="email" name="email" id="email" required />
            <input type="text" name="message" id="message" required />
            <button>Send</button>
        </div>
    )
}