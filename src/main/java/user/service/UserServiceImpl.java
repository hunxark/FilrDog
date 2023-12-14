package user.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.bean.User;
import user.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	public UserRepository userRepository;
	
	@Override
    public Optional<User> login(String email, String passwd) {
        return userRepository.findByEmailAndPasswd(email, passwd);
    }

	@Override
	public Optional<User> findId(Long id) {
		Optional<User> user = userRepository.findById(id);
		System.out.println("UserService id값 찾기 : " + user.get().getId());
		return user;
	}
}
